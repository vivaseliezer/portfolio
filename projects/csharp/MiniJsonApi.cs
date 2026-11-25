using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

namespace OrlandoVivas.CSharpLab
{
    /// <summary>
    /// Lightweight zero-dependency HTTP JSON API using .NET HttpListener.
    /// Routes: GET /api/health, GET /api/projects
    /// </summary>
    public class MiniJsonApi
    {
        private readonly string _prefix;
        private readonly List<object> _catalog = new()
        {
            new { id = 1, name = "InventoryManager", stack = "C# / LINQ" },
            new { id = 2, name = "BankAccountSystem", stack = "C# / OOP" },
            new { id = 3, name = "TaskBoardManager", stack = "C# / System.Text.Json" },
        };

        public MiniJsonApi(string prefix = "http://localhost:5080/")
        {
            _prefix = prefix;
        }

        public string BuildJsonResponse(string path) => path switch
        {
            "/api/health" => JsonSerializer.Serialize(new { status = "ok", runtime = Environment.Version.ToString() }),
            "/api/projects" => JsonSerializer.Serialize(new { count = _catalog.Count, items = _catalog }),
            _ => JsonSerializer.Serialize(new { error = "Not Found", path }),
        };

        public async Task StartAsync(CancellationToken ct)
        {
            using var listener = new HttpListener();
            listener.Prefixes.Add(_prefix);
            listener.Start();
            Console.WriteLine($"[MiniJsonApi] Listening on {_prefix}");

            while (!ct.IsCancellationRequested)
            {
                var ctx = await listener.GetContextAsync();
                string path = ctx.Request.Url?.AbsolutePath ?? "/";
                string payload = BuildJsonResponse(path);
                byte[] buffer = Encoding.UTF8.GetBytes(payload);
                ctx.Response.StatusCode = path is "/api/health" or "/api/projects" ? 200 : 404;
                ctx.Response.ContentType = "application/json";
                ctx.Response.ContentLength64 = buffer.Length;
                await ctx.Response.OutputStream.WriteAsync(buffer, ct);
                ctx.Response.Close();
            }
        }

        public static void RunSelfCheck()
        {
            var api = new MiniJsonApi();
            Console.WriteLine($"[MiniJsonApi] GET /api/health   -> {api.BuildJsonResponse("/api/health")}");
            Console.WriteLine($"[MiniJsonApi] GET /api/projects -> {api.BuildJsonResponse("/api/projects")}");
        }
    }
}
