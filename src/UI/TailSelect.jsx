

export default function TailSelect({id, refSel, ops, handleChange}) {
  return (
    <select id={id}
            onChange={handleChange}
            ref={refSel}
    >{ops.map(item=><option key={item} value={item}>{item}</option>)}
        
    </select>
  )
}
