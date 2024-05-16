
interface ICounterProps {
    count: number;
}

export default function Counter({count}: ICounterProps){

    return (
    <div>
        <p>{count}</p>
    </div>
    )
}
