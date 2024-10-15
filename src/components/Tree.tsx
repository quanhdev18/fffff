import * as React from "react";
import {
  Tree,
  TreeItemValue,
  TreeItem,
  TreeItemLayout,
} from "@fluentui/react-components";
import { 
    CaretDown24Filled,
} from '@fluentui/react-icons';

  const OpenItemsControlled: React.FC = () => {
  const [openItems, setOpenItems] = React.useState<Iterable<TreeItemValue>>([]);

  // Hàm xử lý sự thay đổi trạng thái mở/đóng của các mục trong Tree
  const handleOpenChange = (event: React.SyntheticEvent, data: { open: boolean; value: TreeItemValue }) => {
    if (data.open) {
      setOpenItems((prevOpenItems) => new Set([...prevOpenItems, data.value]));
    } else {
      setOpenItems((prevOpenItems) => {
        const newOpenItems = new Set(prevOpenItems);
        newOpenItems.delete(data.value);
        return newOpenItems;
      });
    }
  };

  return (
    <Tree
      aria-label="Open Items Controlled"
      openItems={openItems}
      onOpenChange={handleOpenChange}  // Gọi hàm handleOpenChange khi có sự thay đổi
    >
      <TreeItem itemType="branch" value="tree-item-1">
        <CaretDown24Filled /> Pinned
        <Tree>
          <TreeItem itemType="leaf">
            <TreeItemLayout>Home Hướng dẫn sử dụng </TreeItemLayout>
          </TreeItem>
        </Tree>
      </TreeItem>
      <TreeItem itemType="branch" value="tree-item-2">
        <CaretDown24Filled /> Của tôi
        <Tree>
          <TreeItem itemType="branch" value="tree-item-3">
            <TreeItemLayout>Danh mục</TreeItemLayout>
            <Tree>
              <TreeItem itemType="leaf">
                <TreeItemLayout>Work Group</TreeItemLayout>
              </TreeItem>
              <TreeItemLayout>Cơ cấu tổ chức</TreeItemLayout>
              <TreeItemLayout>User Profile</TreeItemLayout>
            </Tree>
            <TreeItemLayout>Cơ cấu tổ chức</TreeItemLayout>
            <TreeItemLayout>User Profile</TreeItemLayout>
          </TreeItem>
        </Tree>
      </TreeItem>
    </Tree>
  );
};

export default OpenItemsControlled;