
interface PropsType {
  name: string
}

const Hello = (props: PropsType) => {
  return (<div> Hello {props.name}</div>)
}

export default Hello