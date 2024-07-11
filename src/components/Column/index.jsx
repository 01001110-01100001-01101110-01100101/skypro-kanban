import { Card } from "../Card";
import * as S from "./column.styled.js";

export const Column = ({ title, cards }) => {
    return (
        <S.MainColumn>
			<S.ColumnTitle>
				<p>{title}</p>
			</S.ColumnTitle>
			<S.Cards>
				{cards.map((card) => (
					<Card 
						key={card.id} 
						title={card.title} 
						topic={card.topic} 
						date={card.date}
					/>
				))}
			</S.Cards>
		</S.MainColumn>		
    )
}