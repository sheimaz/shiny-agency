import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CardLabel = styled.span``
const CardImage = styled.img`
   height: 80px;
   width: 80px;
   border-radius: 50%;
`
const CardWrapper = styled.div`
   display: flex;
   flex-direction: column;
   padding: 15px;
   background-color: ${colors.backgroundLight};
   border-radius: 30px;
   width: 350px;
   transition: 200ms;
   &:hover {
      cursor: pointer;
      box-shadow: 2px 2px 10px #e2e3e9;
   }
`

function Card({ label, title, picture }) {
    return (
      <CardWrapper>
          <CardLabel>{label}</CardLabel>
          <CardImage src={picture} alt="freelancer" height={80} width={80} />
          <span>{title}</span>
      </CardWrapper>

       )
    }

    Card.propTypes = {
        label: PropTypes.string,
        title: PropTypes.string,
        picture: PropTypes.string,
     }
 
 export default Card