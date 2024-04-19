
interface HeaderProps {
	title: string;
	content: string;
	description?: string;

}

// export default function Header(props: HeaderProps) {

// 	return (
// 		<>
// 		<div>{props.title}</div>
// 		<div>{props.content}</div>
// 		<div>{props.description || '-'}</div>
// 		{description && (
// 			<div>description</div>
// 		)}

// 		</>
// 	)
// }

// without props

export default function Header({title, content , description}: HeaderProps) {
	return (
		<>
		<div>{title}</div>
		<div>{content}</div>
		{description && (
			<div>description</div>
		)}
		</>
	)
}