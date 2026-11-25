using System;
using System.Security.Cryptography;
using System.Text;

namespace OrlandoVivas.CSharpLab
{
    public static class SecurityToolkit
    {
        private const string Charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-";

        public static string GenerateSecurePassword(int length = 16)
        {
            if (length < 8) throw new ArgumentOutOfRangeException(nameof(length), "Minimum length is 8.");
            var chars = new char[length];
            for (int i = 0; i < length; i++)
            {
                chars[i] = Charset[RandomNumberGenerator.GetInt32(Charset.Length)];
            }
            return new string(chars);
        }

        public static string ComputeSha256Hex(string input)
        {
            byte[] hash = SHA256.HashData(Encoding.UTF8.GetBytes(input));
            return Convert.ToHexString(hash).ToLowerInvariant();
        }

        public static string EvaluateStrength(string password)
        {
            int score = 0;
            if (password.Length >= 12) score++;
            if (password.IndexOfAny("ABCDEFGHIJKLMNOPQRSTUVWXYZ".ToCharArray()) >= 0) score++;
            if (password.IndexOfAny("abcdefghijklmnopqrstuvwxyz".ToCharArray()) >= 0) score++;
            if (password.IndexOfAny("0123456789".ToCharArray()) >= 0) score++;
            if (password.IndexOfAny("!@#$%^&*_-".ToCharArray()) >= 0) score++;
            return score >= 5 ? "Strong" : score >= 3 ? "Moderate" : "Weak";
        }

        public static string CaesarShift(string text, int shift)
        {
            var sb = new StringBuilder(text.Length);
            foreach (char ch in text)
            {
                if (char.IsLetter(ch))
                {
                    char offset = char.IsUpper(ch) ? 'A' : 'a';
                    sb.Append((char)(((ch - offset + shift) % 26 + 26) % 26 + offset));
                }
                else sb.Append(ch);
            }
            return sb.ToString();
        }

        public static void RunDemo()
        {
            string pw = GenerateSecurePassword(16);
            string hash = ComputeSha256Hex(pw);
            Console.WriteLine($"[Security] Generated Password ({EvaluateStrength(pw)}): {pw}");
            Console.WriteLine($"[Security] SHA-256 Digest: {hash[..20]}...");
            Console.WriteLine($"[Security] Caesar(+3) 'Orlando': {CaesarShift("Orlando", 3)}");
        }
    }
}
