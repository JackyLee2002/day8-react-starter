export default function CountersSum({realCounts}) {
  return (
    <>
      Sum: {realCounts.reduce((sum, count) => sum + count, 0)}
    </>
  )
}
