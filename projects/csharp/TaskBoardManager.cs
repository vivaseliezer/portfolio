using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;

namespace OrlandoVivas.CSharpLab
{
    public enum WorkStatus { Todo, InProgress, Done }
    public enum PriorityLevel { Low, Medium, High }

    public class SprintTask
    {
        public int Id { get; init; }
        public string Title { get; set; } = "";
        public string Assignee { get; set; } = "Unassigned";
        public WorkStatus Status { get; set; } = WorkStatus.Todo;
        public PriorityLevel Priority { get; set; } = PriorityLevel.Medium;
        public DateOnly DueDate { get; set; }
    }

    public class TaskBoardManager
    {
        private readonly List<SprintTask> _tasks = new();
        private int _nextId = 1;

        public SprintTask CreateTask(string title, string assignee, PriorityLevel priority, DateOnly dueDate)
        {
            var task = new SprintTask
            {
                Id = _nextId++,
                Title = title.Trim(),
                Assignee = assignee.Trim(),
                Priority = priority,
                DueDate = dueDate
            };
            _tasks.Add(task);
            return task;
        }

        public bool UpdateStatus(int id, WorkStatus newStatus)
        {
            var task = _tasks.FirstOrDefault(t => t.Id == id);
            if (task is null) return false;
            task.Status = newStatus;
            return true;
        }

        public IEnumerable<SprintTask> GetOverdueTasks(DateOnly today) =>
            _tasks.Where(t => t.Status != WorkStatus.Done && t.DueDate < today);

        public string ExportToJson() =>
            JsonSerializer.Serialize(_tasks, new JsonSerializerOptions { WriteIndented = true });

        public static void RunDemo()
        {
            var board = new TaskBoardManager();
            var t1 = board.CreateTask("Build MySQL billing schema", "Orlando", PriorityLevel.High, new DateOnly(2026, 11, 20));
            var t2 = board.CreateTask("Add unit tests to C# lab", "Orlando", PriorityLevel.Medium, new DateOnly(2026, 11, 28));
            board.UpdateStatus(t1.Id, WorkStatus.Done);
            board.UpdateStatus(t2.Id, WorkStatus.InProgress);

            Console.WriteLine($"[TaskBoard] Tasks tracked: 2 | Overdue: {board.GetOverdueTasks(new DateOnly(2026, 11, 25)).Count()}");
            Console.WriteLine($"[TaskBoard] JSON Export Length: {board.ExportToJson().Length} chars");
        }
    }
}
