import CreateSnippetButton from "../features/snippets/CreateSnippetForm";
import SnippetsGrid from "../features/snippets/SnippetsGrid";
import ProtectedRoute from "../utils/ProtectedRoute";
import AbsoluteCenter from "../ui/AbsoluteCenter";
import Spinner from "../ui/Spinner";

import { useSnippets } from "../features/snippets/useSnippets";
import SearchInput from "../features/snippets/SearchInput";

const Home = () => {
    const { isLoading } = useSnippets();

    if (isLoading)
        return (
            <AbsoluteCenter>
                <Spinner />
            </AbsoluteCenter>
        );

    return (
        <ProtectedRoute>
            <div className="space-y-4">
                <div className="flex gap-4">
                    <SearchInput />
                    <CreateSnippetButton />
                </div>

                <SnippetsGrid />
            </div>
        </ProtectedRoute>
    );
};

export default Home;
