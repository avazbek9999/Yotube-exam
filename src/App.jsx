import './App.scss';

import AuthenticetedApp from './AuthenticetedApp';
import UnAuthenticetedApp from './UnAuthenticetedApp';

import useToken from './Hooks/useToken';

function App() {
	const [token] = useToken();
	if (token) {
		return <AuthenticetedApp />;
	} else {
		return <UnAuthenticetedApp />;
	}
}

export default App;
