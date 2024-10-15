import * as React from "react";
import { Image, Text, makeStyles, Button } from "@fluentui/react-components";

const useStyles = makeStyles({
    container: {
        display: "flex",
        height: "100%",
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxHeight: '800px',
        paddingTop: '220px',
        alignContent: 'center',
        justifyItems: 'center',
    },
    imageContainer: {
        border: 'none',
    },
    textContainer: {
        paddingTop: '20px',
        gap: '8px',
        justifyContent: "center",
        alignItems: "center",
        alignContent: 'center',
        justifyItems: 'center',
    },
    textA: {
        paddingBottom: '10px',
        justifyContent: "center",
        alignItems: "center",
        alignContent: 'center',
        justifyItems: 'center',
        paddingLeft: '186px',
    },
    textHeader: {
        
        fontWeight: 'var(--fontWeightBold)',
        fontSize: 'var(--fontSizeBase400)',
        justifyContent: "center",
        alignItems: "center",
        alignContent: 'center',
        justifyItems: 'center',
    },
    textBottom: {
        fontSize: 'var(--fontSizeBase300)',
    },
    buttonContainer: {
        paddingBottom: '250px',
        paddingTop: '30px',
    },
    buttonAdd: {
        minWidth: '280px',
        color: 'var(--colorNeutralForegroundOnBrand)',
        backgroundColor: 'var(--colorBrandBackground)',
        fontWeight: 'var(--fontWeightSemibold)',
        fontSize: 'var(--fontSizeBase300)',

    },
});

export const Fallback = () => {
    const styles = useStyles(); // Call useStyles to get the styles

    return (
        <div className={styles.container}>
            <Image
                alt="Allan's avatar"
                bordered
                src="https://cdn.mass.spsvn.com/images/app/empty-list.png"
                height={200}
                width={200}
                className={styles.imageContainer}
            />
            <div className={styles.textContainer}>
                <div className={styles.textA}>
                    <Text className={styles.textHeader}>Chưa có dữ liệu </Text>
                </div>
                <div>
                    <Text className={styles.textBottom}>Hãy bấm nút "Thêm mới" phía trên hoặc nút ngay bên dưới để tạo yêu cầu nhé</Text>
                </div>
            </div >
            <div className={styles.buttonContainer}>
                <Button className={styles.buttonAdd}>Tạo yêu cầu mới</Button>
            </div>
        </div>
    );
};
