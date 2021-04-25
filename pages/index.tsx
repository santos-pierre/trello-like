import Layout from '@components/Dashboard/Layout';
import List from '@components/List';

export const Home = (): JSX.Element => {
    return (
        <Layout boardName="Board Name">
            <div className="flex w-full overflow-y-hidden overflow-x-auto space-x-4 h-[700px] scroll-gradient p-5 bg-transparent">
                {Array(6)
                    .fill(null)
                    .map((_element, index) => {
                        return <List key={index} />;
                    })}
            </div>
        </Layout>
    );
};

export default Home;
