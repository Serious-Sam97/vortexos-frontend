import { Table, TableBody, TableDataCell, TableHead, TableHeadCell, TableRow } from "react95";
import { useProcessContext } from "../../contexts/ProcessContext";

const ProcessList: React.FC = () => {
    const { processes } = useProcessContext();
    const headers: string[] = [
        'UUID', 'Name', 'Priority'
    ];

    return (
        <>
            <Table style={{width: '50vw'}}>
                <TableHead>
                    <TableRow>
                        {
                            headers.map(header => (
                                <TableHeadCell key={header}>{header}</TableHeadCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        processes.map((process, index) => (
                            <TableRow key={index}>
                                <TableDataCell style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                    { process.uuid }
                                </TableDataCell>
                                <TableDataCell style={{ textAlign: 'center', verticalAlign: 'middle' }}>{process.name}</TableDataCell>
                                <TableDataCell style={{ textAlign: 'center', verticalAlign: 'middle' }}>{process.priority === 0 ? 'High' : 'Normal'}</TableDataCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    );
};

export default ProcessList;