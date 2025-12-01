import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import EmptyPage from '../pages/EmptyPage'

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const PageToReadComponent = ({ books }) => {

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}
            C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
            C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
            Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const data = books.map(book => ({
        name: book.bookName,
        pages: book.totalPages
    }));

    if(books.length < 1)return<EmptyPage></EmptyPage>

    return (
        <div  className='flex flex-col items-center'>
            <h2 className="text-2xl font-bold text-center my-4">Pages To Read</h2>

            <BarChart
                width={800}
                height={400}
                data={data}
                margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="pages" shape={TriangleBar} label={{ position: 'top' }}>
                    {data.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PageToReadComponent;
