import {ChangeEvent, FC, useState} from "react";
import {Button, Checkbox, Grid} from "@mui/material";
import {RequestService} from "./request.service";

export const Request: FC = () => {
    const [check, setCheck] = useState(false)
    const [resp, setResp] = useState<null | string>(null)

    const onRequest = async () => {
        try {
            const response: Response | void = await RequestService.authTest(check)
            setResp(response.statusText + '---' + response.status)

        } catch (error: any) {
            console.log({...error});
            console.log(error.response ? error.response.data.errorText : error.message);
            setResp(error.response ? error.response.data.errorText : error.message)
        }

    }

    const onChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
        setCheck(e.currentTarget.checked)
    }

    return <Grid>
        <Button onClick={onRequest} variant={'contained'}>fetch</Button>
        <Checkbox checked={check} onChange={onChangeCheck}/>
        <Grid>
            {resp && resp}
        </Grid>
    </Grid>
}