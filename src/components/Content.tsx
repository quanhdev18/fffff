import React, { useState, useEffect } from 'react';
import {
    Text,
    Button,
    Input,
    ToggleButton,
    makeStyles,
    Menu,
    MenuTrigger,
    MenuList,
    MenuItem,
    MenuPopover,

} from '@fluentui/react-components';
import {
    DocumentFolder24Filled,
    QuestionCircle24Filled,
    ShareAndroid24Filled,
    Delete28Regular,
    Search20Regular,
    Filter28Regular,
    PanelRightExpand20Regular,
    Info20Regular,
    List24Filled,
    TextAlignLeft24Filled,
    ChevronDown12Filled,
} from "@fluentui/react-icons";
import PaginationFooter from './PaginationFooter';
import DataGrid from './Table';
import WorkgroupForm from './WorkgroupForm';
import { getAllDataWithPagination } from "@/service/WorkGroupservice"; // Import hàm gọi API
import { IApiResponse, IImportTemplateResponse } from "@/interfaces/WorkGroupinterfaces";
import { Filter } from './filter';
import { Fallback } from './CommingSoon';

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        // height: '100%vh',
        width: '100%',
        backgroundColor: 'var(--colorNeutralBackground1)',
        color: 'var(--colorNeutralForeground1)',
    },
    toolbar: {
        width: 'calc(100% - 40px)',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '60px',
        backgroundColor: '#F5F5F5',
        borderBottom: '1px solid #EBEBEB',
        paddingLeft: '20px',
        paddingRight: '20px',
        backgroundColor: 'var(--colorNeutralBackground1)',
    },
    iconContainer: {
        width: "32px",
        height: "32px",
        backgroundColor: "#6264A6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
    },
    text: {
        fontWeight: '700',
        fontSize: '18px',
    },
    sectionHeader: {
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        height: '61px',
    },

    subHeader: {
        fontSize: '14px',
        paddingBottom: '3px',
    },
    buttonGroup: {
        display: 'flex',
        gap: '8px',
        // flexGrow: '1',
    },

    buttonStyle: {
        backgroundColor: 'var(--colorBrandBackground)',
    },

    bottomBar: {
        height: '48px !important',
        borderBottom: '1px solid #EBEBEB',
        display: 'flex',
        justifyContent: 'space-between',
        // justifyItems: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        padding: '0 20px',
        backgroundColor: 'var(--colorNeutralBackground1)',
        flexDirection: 'row',
    },

    deleteContainer: {
        backgroundColor: '#F5F5F5',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: 'var(--colorNeutralBackground1)',
    },

    menuContainer: {
        right: "20px",
    },

    searchInput: {
        width: '205px',
        maxWidth: '205px',
        textOverflow: 'ellipsis', // Để rút ngắn với ba chấm
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        right: '20px',
        justifyItems: 'flex-end',
        backgroundColor: 'transparent',
    },
    buttonHelp: {
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.2rem 0.4rem -0.075rem",
    },

    buttonAdd: {
        backgroundColor: 'var(--colorBrandBackground)',
        alignItems: 'center',
        paddingLeft: '30px',
        paddingRight: '10px',
        // right: '10px',
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.2rem 0.4rem -0.075rem",
        left: '20px',
    },

    tableWrapper: {
        flexGrow: 1,
        backgroundColor: "white",
        height: "100%",
        // width: "fit-content",
        width: '100%',
        backgroundColor: 'var(--colorNeutralBackground1)',
        position: 'relative',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    PainIcon: {
        minWidth: '32px',
        maxWidth: '32px',
        padding: '5px',
    },
    InfoIcon: {
        minWidth: '32px',
        maxWidth: '32px',
        padding: '5px',
        border: 'none',
        backgroundColor: 'none',
    },
    filterIcon: {
        padding: '5px',
    },
    customIcon: {
        color: 'var(--colorNeutralForeground2)',
        height: '20px',
        width: '20px',
        
    },
    paginationFooter: {

        minHeight: '8px',
        borderRightWidth: 'var(--strokeWidthThin)',
        borderRightStyle: 'solid',
        borderRightColor: 'var(--colorNeutralStroke2)',

    },
});

const Content: React.FC = () => {
    const classes = useStyles();
    const [selectedItem, setSelectedItem] = React.useState(null);
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);

    const [isFormVisible, setFormVisible] = useState(false);

    const toggleChecked = (buttonIndex: number) => {
        switch (buttonIndex) {
            case 1:
                setChecked1(!checked1);
                break;
            case 2:
                setChecked2(!checked2);
                break;
            // case 3:
            //     setFormVisible(!isFormVisible); // Bật/tắt trạng thái hiển thị form Thêm mới
            //     break;
            // default:
            //     break;
        }
    };

    const handleDeleteSelected = () => { /* Xử lý xóa */ };
    const handleUpdateClick = () => { /* Xử lý cập nhật */ };
    const handlePreviousPage = () => { /* Xử lý trang trước */ };
    const handleNextPage = () => { /* Xử lý trang tiếp theo */ };

    // const [items, setItems] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 30; // Số bản ghi mỗi trang

    const [loading, setLoading] = React.useState(true); // State để quản lý trạng thái loading
    const [items, setItems] = React.useState([]); // Dữ liệu của bạn
    // Gọi API để lấy dữ liệu khi currentPage thay đổi
    useEffect(() => {
        const fetchPaginationData = async () => {
            setLoading(true); // Bắt đầu tải dữ liệu
            const response: IApiResponse | undefined = await getAllDataWithPagination(currentPage);
            if (response) {
                setItems(response.Data.Items);
                setTotalPages(response.Data.TotalPages);
                setTotalCount(response.Data.TotalCount);
            }
            setLoading(false); // Kết thúc tải dữ liệu
        };

        fetchPaginationData();
    }, [currentPage]);


    const handleImportTemplate = async () => {
        const response: IImportTemplateResponse | undefined = await importTemplate();
        if (response) {
            const url = window.URL.createObjectURL(response.data); // Tạo URL cho blob
            const a = document.createElement('a');
            a.href = url;
            a.download = 'template.xlsx'; // Đặt tên file download
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url); // Giải phóng URL
        }
    };



    return (
        <div className={classes.wrapper}>
            <div className={classes.toolbar}>
                <div className={classes.sectionHeader}>
                    <div className={classes.iconContainer}>
                        <DocumentFolder24Filled style={{ color: "#FFFFFF", width: "24px", height: "24px" }} />
                    </div>
                    <Text className={classes.text} weight="bold">Work Group</Text>

                </div>
                <div className={classes.buttonGroup}>
                    <Button className={classes.InfoIcon}>
                        <Info20Regular />
                    </Button>
                    <ToggleButton
                        checked={checked2}
                        icon={<ShareAndroid24Filled className={classes.customIcon} />}
                        onClick={() => toggleChecked(2)}
                        className={classes.buttonShare}
                    >
                        Sharepoint List
                    </ToggleButton>
                    <Button className={classes.PainIcon}>
                        <PanelRightExpand20Regular />
                    </Button>
                </div>
            </div>

            <div className={classes.bottomBar}>
                <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                    <div>
                        <WorkgroupForm className={classes.buttonAdd} />
                    </div>
                    <div className={classes.deleteContainer}>
                        {/* <Button appearance='transparent' disabled={!selectedItem} icon={<Delete28Regular className={classes.customIcon} />} onClick={handleDeleteSelected}>
                            Xóa
                        </Button> */}
                        <Button appearance='transparent' icon={<Delete28Regular className={classes.customIcon} />} onClick={handleDeleteSelected}>
                            Xóa
                        </Button>

                    </div>
                </div>

                <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                    <div className={classes.paginationFooter}>
                        <PaginationFooter
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            totalPages={totalPages}
                            totalCount={totalCount}
                            pageSize={pageSize}
                        />
                    </div>
                    <div className={classes.menuContainer}>
                        <Menu>
                            <MenuTrigger disableButtonEnhancement>
                                <Button style={{ border: 'none', display: 'flex', alignItems: 'center' }}>
                                    <TextAlignLeft24Filled className={classes.customIcon} />
                                    <span style={{ margin: '0 8px' }}>Bộ lọc đã lưu</span>
                                    <ChevronDown12Filled style={{ fontSize: '12px', }} />
                                </Button>
                            </MenuTrigger>

                            <MenuPopover>
                                <MenuList>
                                    <MenuItem>Bộ lọc 1</MenuItem>
                                    <MenuItem>Bộ lọc 2</MenuItem>
                                    <MenuItem>Bộ lọc 3</MenuItem>
                                </MenuList>
                            </MenuPopover>
                        </Menu>
                    </div>
                    <div className={classes.filterIcon}>
                        <Filter />

                    </div>
                </div>
            </div>

            <div className="tableWrapper">
                {items.length > 0 ? (
                    <DataGrid items={items} />
                ) : (
                    <Fallback />
                )}
            </div>
        </div>
    );
};

export default Content;
