import { useState } from "react";
function WelcomePage({name})
{
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>Welcome {name}</h1>
            <button onClick={()=>setCount(count+1)}>Click me {count}</button>
        </div>
    );
}
export default WelcomePage;
