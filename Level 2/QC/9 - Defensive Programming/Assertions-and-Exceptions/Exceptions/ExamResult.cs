using System;

public class ExamResult
{
    public ExamResult(int grade, int minGrade, int maxGrade, string comments)
    {
        if (grade < 0)
        {
            throw new ArgumentOutOfRangeException("grade should be > 0");
        }

        if (minGrade < 0)
        {
            throw new ArgumentOutOfRangeException("minGrade should be > 0");
        }

        if (maxGrade <= minGrade)
        {
            throw new ArgumentException("minGrade should be >= maxGrade");
        }

        if (string.IsNullOrEmpty(comments))
        {
            throw new ArgumentNullException("comments should not be empty");
        }

        this.Grade = grade;
        this.MinGrade = minGrade;
        this.MaxGrade = maxGrade;
        this.Comments = comments;
    }

    public int Grade { get; private set; }

    public int MinGrade { get; private set; }

    public int MaxGrade { get; private set; }

    public string Comments { get; private set; }
}
