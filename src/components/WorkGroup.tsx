import * as React from 'react';
import {
    Title1,
    Title2,
    Label,
    Button,
    Text,
    Overflow,
    makeStyles
} from '@fluentui/react-components';

import {
    Filter28Regular,
    CaretDown24Filled,
    AppsList24Filled,
    QuestionCircle24Filled,
    ShareAndroid24Filled,
    Add24Filled,
    Delete28Regular,
    IosArrowLtr24Regular,
    IosArrowRtl24Regular,
    ListBarTreeOffset16Filled,


} from "@fluentui/react-icons";


import Content from './Content';
import OpenItemsControlled from './Tree';

const useClasses = makeStyles({
     container: {
         fontFamily: 'Segoe UI',
         width: '100%',
         height: '100%',
           display: 'flex',
        // //  overflowX: 'hidden',
        // //  overflowY: 'hidden',
         overflow: 'auto',
     },

   

    appLeftBar: {
        width: '320px',
        height: '100%',
        backgroundColor: '#F0F0F0',
        position: 'relative',
        flexDirection: 'column',
        backgroundColor: 'var(--colorNeutralBackground4)',


        '&:after': {
            position: 'absolute',
            content: '""',
            height: '100%',
            width: '8px',
            backgroundImage: 'linear-gradient(90deg, rgba(204, 204, 204, 0) 0%, rgba(173, 173, 173, 0.2) 100%)',
            top: '0px',
            right: '0px'
        },
    },

    textleftbar: {
        width: '304px',
        height: '60px',
        borderBottom: '1px solid #EBEBEB',
        paddingLeft: '16px',
    },

    topnav: {
        height: '33px',
        width: '150px',
        alignContent: 'center',

        fontSize: '18px',
        padding: '10px 0px 18px',
        
    },
    textnav: {
        fontWeight: '700',
        fontSize: '18px',
       
    },
    treemenu: {
        marginTop: 'auto',  // Adjust margin if needed
        paddingLeft: '16px',
    },







    Content: {
        width: '100%',
        
        height: '100%',
        backgroundColor: 'var(--colorNeutralStroke2)',
        overflow: 'hidden',
        // width: 'calc(100vm - 378px)',
    },

});

const WorkGroup: React.FC = (props) => {
    const classes = useClasses();

    return (
        <div className={classes.container}>
            
                <div className={classes.appLeftBar}>
                    <div className={classes.textleftbar}>
                        <div className={classes.topnav}>
                            <Text className={classes.textnav} weight="bold">Work Group</Text>
                        </div>
                    </div>
                    <div className={classes.treemenu}>
                        <OpenItemsControlled />
                    </div>
                </div>

                <div className={classes.Content}>
                    <Content />
                </div>
            

        </div>
    );
}

export default WorkGroup;
