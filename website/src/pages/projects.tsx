import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import Portfolio from '@/components/Portfolio';

const Index = () => {
    return (
        <Main meta={<Meta title="Projects 🧱"/>}>
            <div className="sectionTitle">
                <h1>🧱Projects</h1>
                <p className="mt-4 ml-1 text-sm md:text-base font-normal">
                    All projects that I've contributed to, or my weekly side project that I always say I'll finish.
                </p>
            </div>
            <Portfolio filter={1} />
        </Main>
    );
};

export default Index;
