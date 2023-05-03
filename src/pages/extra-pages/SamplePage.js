// material-ui
import { Button, Typography } from '@mui/material';
import api from 'services/Api';

// project import
import MainCard from 'components/MainCard';
import { useEffect } from 'react';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
    const sendReq = async () => {
        await api
            .get('/test')
            .then((res) => console.log('res ', res))
            .catch((err) => console.log('Err ', err));
    };

    const sendMultiReq = () => {
        api.get('/test')
            .then((res) => console.log('res ', res))
            .catch((err) => console.log('Err ', err));
        api.get('/sample1')
            .then((res) => console.log('res ', res))
            .catch((err) => console.log('Err ', err));
        api.get('/sample2')
            .then((res) => console.log('res ', res))
            .catch((err) => console.log('Err ', err));

        console.log('send multi req ');
    };
    const sendAsyncMultiReq = async () => {
        await api
            .get('/test')
            .then((res) => console.log('res ', res))
            .catch((err) => console.log('Err ', err));
        await api
            .get('/sample1')
            .then((res) => console.log('res ', res))
            .catch((err) => console.log('Err ', err));
        await api
            .get('/sample2')
            .then((res) => console.log('res ', res))
            .catch((err) => console.log('Err ', err));

        console.log('send multi req with async func');
    };

    useEffect(() => {
        sendMultiReq();
        sendAsyncMultiReq();
    }, []);

    return (
        <>
            <MainCard title="Sample Card">
                <Typography variant="body2">
                    Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa.
                    Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube
                    grue dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non
                    president, sunk in culpa qui officiate descent molls anim id est labours.
                </Typography>
            </MainCard>
            <Button variant="outlined" onClick={sendReq}>
                Send Request
            </Button>
        </>
    );
};

export default SamplePage;
