import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import NavBar from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DairyEntrance from '../../components/DairyEntrance';
import { useJournals } from '../../context/JournalsContext';
import { useEffect } from 'react';

const Dairy = () => {
	const { getJournals, journals } = useJournals();

	useEffect(() => {
		getJournals();
	}, []);
	return (
		<>
			<SecondaryHeader title='Diario' />
			<Main
				onLoad={() => {
					document.getElementById('create').focus();
				}}
			>
				<NotesSection>
					<List>
						{journals.map(journal => (
							<DairyEntrance key={journal.uid} {...journal} />
						))}
					</List>
				</NotesSection>
				<LinkStyled id='create' to='/Journals'>
					¡Quiero escribir algo nuevo!
				</LinkStyled>
			</Main>
			<NavBar />
		</>
	);
};

const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;

const NotesSection = styled.section`
	width: 100%;
`;

const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	list-style: none;
	align-self: center;
`;

const LinkStyled = styled(Link)`
	text-decoration: none;
	background-color: #003b5c;
	font-size: 1.5rem;
	color: #ffffff;
	padding: 1rem;
	border-radius: 1rem;
	margin: 1rem 1rem 9rem 1rem;
`;
export default Dairy;
