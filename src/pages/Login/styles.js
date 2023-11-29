import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	padding: 1rem;
	margin-top: 2rem;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

const LinkStyled = styled(Link)`
	color: #00b5e2;
`;

const DownloadButton = styled.a`
	vertical-align: middle;
	background-color: #00b5e2;
	color: #fff;
	border: none;
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	font-weight: 700;
	transition: 0.3s;
	&:hover {
		background-color: #0089b3;
	}

	i {
		margin-right: 0.5rem;
		font-size: 1.5rem;
	}
`;

export { Container, Form, LinkStyled, DownloadButton };
