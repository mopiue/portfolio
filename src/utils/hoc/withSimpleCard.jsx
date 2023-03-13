import styled from '@emotion/styled'
import Button from '../../components/Button/Button'

function withCard(Component) {
  return function Card({
    title,
    text,
    contentTitle,
    hasButton,
    btnType,
    btnLink,
    btnText,
  }) {
    const Card = styled.div`
      width: calc(33% - 10px);
      border: 1px solid #abb2bf;
    `

    const CardTitle = styled.span`
      ${contentTitle
        ? `font-weight: 400;
        font-size: 16px;
        color: #ABB2BF;`
        : `font-weight: 600;
        color: #ffffff;
        `}
      display: block;
      padding: 8px;
      border-bottom: 1px solid #abb2bf;
    `

    const ContentTitle = styled.span`
      display: block;
      font-weight: 500;
      font-size: 24px;
      color: #ffffff;
      margin-bottom: 16px;
    `

    const CardDescription = styled.p`
      color: #abb2bf;
      font-size: 16px;
      padding: 16px;
    `

    return (
      <Card>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {contentTitle && <ContentTitle>{contentTitle}</ContentTitle>}
          {text}
        </CardDescription>
        {hasButton && (
          <div style={{ margin: '0 0 16px 16px' }}>
            <Button btnType={btnType} btnText={btnText} btnLink={btnLink} />
          </div>
        )}
      </Card>
    )
  }
}

export default withCard
