import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Counter</h1>
            <div>            
                <button onClick={() => setCount(count + 1)}>+</button>
                <span style={{paddingLeft: "20px", paddingRight: "20px"}}>{count}</span>
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>

        </div>
    )
}
