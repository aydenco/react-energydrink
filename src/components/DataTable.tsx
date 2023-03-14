import { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'brand', headerName: 'Brand', flex: 1 },
    { field: 'flavor', headerName: 'Flavor', flex: 1 },
    { field: 'caffeine', headerName: 'Caffeine', flex: 1 },
    { field: 'sugar', headerName: 'Sugar', flex: 1 },
    { field: 'calories', headerName: 'Calories', flex: 1 },
]

function DataTable() {
    const [ open, setOpen ] = useState(false);
    const { drinkData, getData }= useGetData();
    const [ selecionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selecionModel[0]);
        getData();
        console.log(`Selection model: ${selecionModel}`)
        setTimeout( () => {window.location.reload() }, 500)
    }

  return (
    <>
        <Modal
            id={selecionModel}
            open={open}
            onClose={handleClose}
        />
        <div className='flex flex-row'>
            <div>
                <button
                    className='p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white'
                    onClick={() => handleOpen()}
                >
                    Create New Drink
                </button>
            </div>
            <Button onClick={handleOpen} className='p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white' >Update</Button>
            <Button onClick={deleteData} className='p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white' >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%' }}
            >
            <h2 className="p-3 bg-slate-300 my-2 rounded">My Drinks</h2>
            <DataGrid rows={drinkData} columns={columns} rowsPerPageOptions={[5,10,25,50,100]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
              setSelectionModel(item)
            }}
                />
        </div>
    </>
  )
}

export default DataTable