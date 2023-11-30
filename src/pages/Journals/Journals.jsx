import { Link } from 'react-router-dom';
import ReturnHeader from '../../components/ReturnHeader/ReturnHeader';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useJournals } from '../../context/JournalsContext';
import { useState } from 'react';

const Journals = () => {
	const [journal, setJournal] = useState({});
	const moods = {
		regular: 'Indiferente',
		happy: 'Feliz',
		sad: 'Triste',
	};
	const { getJournal } = useJournals();
	const params = useParams();
	const { id } = params;

	useEffect(() => {
		const getJournalById = async () => {
			const journal = await getJournal(id);
			setJournal(journal);
		};
		getJournalById();
	}, []);

	return (
		<>
			<ReturnHeader title='Diario' />
			<Main>
				<Header>
					<Title>{journal.title}</Title>
					<Text>Fecha: {journal.date}</Text>
				</Header>
				<Section>
					<Mood>
						<img src={`/assets/${journal.mood}.svg`} alt='' />
						<Text>{moods[journal.mood]}</Text>
					</Mood>
					<Description>{journal.description}</Description>
					<LinkStyled to={`/Diary/${journal.uid}`}>Editar</LinkStyled>
				</Section>
			</Main>
		</>
	);
};

const Main = styled.main`
	margin: 1rem;
	padding: 1rem;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 50%;

	@media screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column-reverse;
	}
`;

const Section = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50%;
`;

const Mood = styled.div`
	display: flex;
	align-self: flex-start;
	width: 40px;
	gap: 0.5rem;
	margin: 1rem;
	font-size: 1.2rem;
`;

const Description = styled.p`
	width: 100%;
	min-width: 325px;
	height: 325px;
	padding: 0.7rem 1rem;
	outline: none;
	font-size: 1.1rem;
	margin: 1rem;
	border-radius: 8px;
	border: 1px solid rgba(0, 0, 0, 0.05);
	background: rgba(181, 226, 226, 0.2);
	color: rgba(25, 25, 25, 0.5);
`;

const LinkStyled = styled(Link)`
	color: #00b5e2;
	align-self: flex-end;
	font-size: 1.2rem;
`;

const Title = styled.h1`
	color: rgba(25, 25, 25, 0.95);

	text-align: center;
	font-size: 32px;
	font-style: normal;
	font-weight: 500;
	line-height: 16px;
`;

const Text = styled.p`
	color: rgba(25, 25, 25, 0.55);
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 36px;
`;
export default Journals;
