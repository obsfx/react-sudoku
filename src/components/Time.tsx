import { Card, CardTitle, CardValue } from '../theme'

const Time: React.FC<{
  time: number
}> = ({ time }) => {
  return (
    <Card>
      <CardTitle>Time</CardTitle>

      <CardValue>
        {Math.floor(time / 60)}:{time % 60 < 10 ? `0${time % 60}` : time % 60}
      </CardValue>
    </Card>
  )
}

export default Time
