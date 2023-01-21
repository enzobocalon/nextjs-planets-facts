import * as S from './styles';

interface Props {
  shouldRenderAsColumns: boolean
  children: React.ReactNode
  active: boolean
  isClickable?: boolean
  onClick?: () => void
}

export default function Box({shouldRenderAsColumns, children, active, isClickable, onClick}: Props) {
	return (
		<S.BoxContainer
			isActive={active}
			shouldRenderAsColumns={shouldRenderAsColumns}
			isClickable={isClickable ? isClickable : false}
			onClick={onClick}>
			{children}
		</S.BoxContainer>
	);
}
