// import { getAllDataWithPagination } from "@/service/WorkGroupservice"; // Import hàm lấy dữ liệu từ API
// import React, { useState, useEffect } from 'react';
// import { Text, makeStyles } from '@fluentui/react-components';
// import { IosArrowLtr24Regular, IosArrowRtl24Regular } from '@fluentui/react-icons';
// import { IApiResponse } from "@/interfaces/WorkGroupinterfaces";

// const useStyles = makeStyles({
//     footer: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         // padding: '16px',
//         // backgroundColor: '#F5F5F5',
//         // height: '0',
//         // backgroundColor: 'var(--colorNeutralBackground1)',
//         // bottom: '0px',
//         // marginBottom: '0',
//         // position: 'absolute',
//         // width: '100%',
//     },
//     // footerDetail: {
//     //     fontSize: '14px',
//     //     backgroundColor: 'var(--colorNeutralBackground1)',
//     //     paddingRight: '1120px',
//     //     width: '300px',
//     // },
//     pagination: {
//         display: 'flex',
//         alignItems: 'center',
//         alignContent: 'center',
//         justifyItems: 'center',
//     },
// });

// const PaginationFooter = ({ onDataChange }) => {  // Thêm onDataChange để cập nhật dữ liệu bảng
//     const classes = useStyles();

//     // State quản lý tổng số trang, số bản ghi, và trang hiện tại
//     const [totalPages, setTotalPages] = useState(0);
//     const [totalCount, setTotalCount] = useState(0);
//     const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
//     const pageSize = 30; // Số bản ghi mỗi trang

//     useEffect(() => {
//         const fetchPaginationData = async () => {
//             const response: IApiResponse | undefined = await getAllDataWithPagination(currentPage); // Gọi API với currentPage
//             if (response) {
//                 setTotalPages(response.Data.TotalPages);
//                 setTotalCount(response.Data.TotalCount);
                
//                 // Cập nhật dữ liệu bảng thông qua onDataChange
//                 onDataChange(response.Data.Items);
//             }
//         };

//         fetchPaginationData();
//     }, [currentPage]); // Gọi API khi currentPage thay đổi

//     const handlePreviousPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     const handleNextPage = () => {
//         if (currentPage < totalPages) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     return (
//         <div className={classes.footer}>
//             {/* <Text className={classes.footerDetail}>
//                 Hiển thị {(currentPage - 1) * pageSize + 1} - {Math.min(currentPage * pageSize, totalCount)} / Tổng {totalCount} bản ghi
//             </Text> */}
            
//             <div className={classes.pagination}>
//                 <div style={{ width: '32px', height: '32px', justifyContent: 'center',alignContent: 'center', }}>
//                 <IosArrowLtr24Regular 
//                     style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer', height: '16px' }} 
//                     onClick={handlePreviousPage} 
//                 />
//                 </div>
//                 <div style={{ width: '32px', height: '32px', justifyContent: 'center',alignContent: 'center', }}>
//                 <IosArrowRtl24Regular 
//                     style={{ cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', width: '16px', height: '16px' }} 
//                     onClick={handleNextPage} 
//                 />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PaginationFooter;



import { getAllDataWithPagination } from "@/service/WorkGroupservice";
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@fluentui/react-components';
import { IosArrowLtr24Regular, IosArrowRtl24Regular } from '@fluentui/react-icons';
import { IApiResponse } from "@/interfaces/WorkGroupinterfaces";

const useStyles = makeStyles({
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pagination: {
        display: 'flex',
        alignItems: 'center',
    },
});

const PaginationFooter = ({ currentPage, setCurrentPage, totalPages, onDataChange }) => {
    const classes = useStyles();
    const [hasPreviousPage, setHasPreviousPage] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);
    const pageSize = 30;

    useEffect(() => {
        const fetchPaginationData = async () => {
            const response: IApiResponse | undefined = await getAllDataWithPagination(currentPage);
            if (response) {
                setHasPreviousPage(response.Data.HasPreviousPage);
                setHasNextPage(response.Data.HasNextPage);
                
                // Cập nhật dữ liệu bảng thông qua onDataChange
                onDataChange(response.Data.Items);
            }
        };

        fetchPaginationData();
    }, [currentPage, onDataChange]);

    const handlePreviousPage = () => {
        if (hasPreviousPage) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (hasNextPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className={classes.footer}>
            <div className={classes.pagination}>
                <div style={{ width: '32px', height: '32px', justifyContent: 'center', alignContent: 'center' }}>
                    <IosArrowLtr24Regular
                        style={{ cursor: hasPreviousPage ? 'pointer' : 'not-allowed', height: '16px' }}
                        onClick={handlePreviousPage}
                    />
                </div>
               
                <div style={{ width: '32px', height: '32px', justifyContent: 'center', alignContent: 'center' }}>
                    <IosArrowRtl24Regular
                        style={{ cursor: hasNextPage ? 'pointer' : 'not-allowed', width: '16px', height: '16px' }}
                        onClick={handleNextPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default PaginationFooter;

