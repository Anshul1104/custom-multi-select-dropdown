import MultiSelectDropdown from "./components/MultiSelectDropdown";
import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css';

export default function App() {

    const queryClient = new QueryClient()

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <main>
                    <h1>Multi-Select Dropdown </h1>
                    <MultiSelectDropdown />
                </main>
            </QueryClientProvider>
        </>
    )
}
