import { ReactNode } from 'react'
import { IconBaseProps } from 'react-icons'
import { FaExclamationTriangle } from 'react-icons/fa'

import { BoxTitle, Container, Content, ErrorLabel } from './styles'

interface SectionBoxProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode
  title: string
  icon?: React.ComponentType<IconBaseProps>
  isErrored?: boolean
}

export const SectionBox = ({ icon: Icon, title, isErrored, children, ...props }: SectionBoxProps) => {
  const ErrorMessageBox = () => isErrored ? <ErrorLabel><FaExclamationTriangle /> Internal server error</ErrorLabel> : null

  return (
    <>
      <Container {...props}>
        <BoxTitle>
          {Icon && <Icon size={20} />}
          <p>{title}</p>
        </BoxTitle>
        <Content>
          {children}
          <ErrorMessageBox />
        </Content>
      </Container>
    </>
  )
}