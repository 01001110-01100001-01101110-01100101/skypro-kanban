import { useState } from "react";
import { Column } from "../Column";
import { tasks } from "../../../data";

export const Main = () => {
	const [cards, setCards] = useState(tasks) //создать массив tasks 01:24:27
	return (
		<main className="main">
			<div className="container">
				<div className="main__block">
					<div className="main__content">
						<Column 
							title="Без статуса" 
							cards={cards.filter((card) => card.status === "Без статуса")}
						/>
						<Column title="Нужно сделать" />
						<Column title="В работе" />
						<Column title="Тестирование" />
						<Column title="Готово" />
					</div>
				</div>
			</div>
		</main>
	);
};
