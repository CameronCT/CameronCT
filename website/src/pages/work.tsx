
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import Portfolio from '@/components/Portfolio';

const Index = () => {
    return (
        <Main meta={<Meta title="Work 🌎"/>}>
            <div className="sectionTitle">
                <h1>🌎Work</h1>
                <p className="mt-4 ml-1 text-sm md:text-base font-normal">
                    All projects that I've either part-taked as a freelancer, or have produced and deployed myself.
                </p>
            </div>
            <Portfolio filter={0} />
        </Main>
    );
};

export default Index;
