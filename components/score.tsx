import { Card, CardContent } from "@/components/ui/card"

interface QuizScoreProps {
  correctAnswers: number
  totalQuestions: number
}

export default function QuizScore({ correctAnswers, totalQuestions }: QuizScoreProps) {
  const score = (correctAnswers / totalQuestions) * 100
  const roundedScore = Math.round(score)

  const getMessage = () => {
    if (score === 100) return "ได้คะแนนเต็ม! เกินปุยมุ้ย"
    if (score >= 80) return "ยอดเยี่ยม! กระเทียมดอง"
    if (score >= 60) return "ดีมาก! เฟี้ยวเงาะฝุดๆ"
    if (score >= 40) return "พอใช้ได้ เบเบนะน้อง"
    return "อย่าท้อ ฝึกให้สุด แล้วหยุดที่ ICU (หยอกๆ)"
  }

  return (
    <Card className="w-full">
      <CardContent className="space-y-4 p-8">
        <div className="text-center">
          <p className="text-4xl font-bold">{roundedScore}%</p>
          <p className="text-sm text-muted-foreground">
            ตอบถูก {correctAnswers} จาก {totalQuestions} ข้อ
          </p>
        </div>
        <p className="text-center font-medium">{getMessage()}</p>
      </CardContent>
    </Card>
  )
}
