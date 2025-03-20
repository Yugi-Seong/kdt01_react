

export default function ({type,i}) {
  return (
    <div>
      <input type={type} className="border border-gray-400" ref={i} />
    </div>
  )
}
