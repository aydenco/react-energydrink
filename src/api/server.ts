const token = 'bb34c321cbce6ec98ee48df0bffaaca5d1c64126650c3709'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://indecisive-amazing-onyx.glitch.me/api/drinks`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Basic ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }



        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://indecisive-amazing-onyx.glitch.me/api/drinks`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Basic ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok) {
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://indecisive-amazing-onyx.glitch.me/api/drinks/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Basic ${token}`
            },
            body: JSON.stringify(data)
        })
        
        if (!response.ok) {
            throw new Error('Failed to Update data on server')
        }

        return await response.json()        
    },

    delete: async (id:string) => {
        const response = await fetch(`https://indecisive-amazing-onyx.glitch.me/api/drinks/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Basic ${token}`
            }
        })
        
        if (!response.ok) {
            throw new Error('Failed to Delete data on server')
        }
        
        return;
    },
}