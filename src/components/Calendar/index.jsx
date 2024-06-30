import * as S from "./calendar.styled.js";

export const Calendar = ({ title, month, dateEnd, dateControl }) => {
	return (
		<S.Calendar className="pop-new-card__calendar">
			<S.CalendarTtl className="subttl">{title}</S.CalendarTtl>
			<S.CalendarBlock>
				<S.CalendarNav>
					<S.CalendarMonth>{month}</S.CalendarMonth>
					<S.NavActions>
						<S.NavAction data-action="prev">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="6"
								height="11"
								viewBox="0 0 6 11"
							>
								<path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
							</svg>
						</S.NavAction>
						<S.NavAction data-action="next">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="6"
								height="11"
								viewBox="0 0 6 11"
							>
								<path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
							</svg>
						</S.NavAction>
					</S.NavActions>
				</S.CalendarNav>
				<S.CalendarContent>
					<S.CalendarDaysNames>
						<S.CalendarDayName>пн</S.CalendarDayName>
						<S.CalendarDayName>вт</S.CalendarDayName>
						<S.CalendarDayName>ср</S.CalendarDayName>
						<S.CalendarDayName>чт</S.CalendarDayName>
						<S.CalendarDayName>пт</S.CalendarDayName>
						<S.CalendarDayName className="-weekend-">сб</S.CalendarDayName>
						<S.CalendarDayName className="-weekend-">вс</S.CalendarDayName>
					</S.CalendarDaysNames>
					<S.CalendarCells>
						<S.CalendarCell_OtherMonth>28</S.CalendarCell_OtherMonth>
						<S.CalendarCell_OtherMonth>29</S.CalendarCell_OtherMonth>
						<S.CalendarCell_OtherMonth>30</S.CalendarCell_OtherMonth>
						<S.CalendarCell_CellDay>31</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay>1</S.CalendarCell_CellDay>
						<div className="calendar__cell _cell-day _weekend">2</div>
						<div className="calendar__cell _cell-day _weekend">3</div>
						<S.CalendarCell_CellDay>4</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay>5</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay>6</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay>7</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay className="_current">8</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay className="_weekend _active-day">9</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay className="_weekend">10</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay>11</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay>12</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay>13</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay>14</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay>15</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay className="_weekend">16</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay className="_weekend">17</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay>18</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay>19</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay>20</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay>21</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay>22</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay className="_weekend">23</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay className="_weekend">24</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay>25</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay>26</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay>27</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay>28</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay>29</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay className="_weekend">30</S.CalendarCell_CellDay>
						<S.CalendarCell_CellDay className="_weekend">1</S.CalendarCell_CellDay>
					</S.CalendarCells>
				</S.CalendarContent>

				<input
				type="hidden"
				id="datepick_value"
				value="08.09.2023"
				/>
				<S.CalendarPeriod>
					<S.CalendarP className="date-end">
						{dateEnd} <span className="date-control">{dateControl}</span>
					</S.CalendarP>
				</S.CalendarPeriod>
			</S.CalendarBlock>
		</S.Calendar>
	);
};
