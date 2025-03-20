

export default function TailBox({id, ref, ops, handleChange}) {
  return (
    <div>
        {/* 부산 축제정보 option으로 나오게 */}
      <select id={id} ref={ref} 
                onChange={handleChange}
      >        
        {ops && ops.map(item=><option key={item} value={item}>{item}</option>)}

      </select>
    </div>
  )
}
