import * as React from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  OverlayDrawer,
  DrawerProps,
  Button,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { Dismiss24Regular, Filter28Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    columnGap: tokens.spacingHorizontalXS,
  },
});

export const Filter = () => {
  const styles = useStyles();

  const [isOpen, setIsOpen] = React.useState(false);
  const [position, setPosition] =
    React.useState<Required<DrawerProps>["position"]>("end");

  const onClickEndButton = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <div>
      <OverlayDrawer
        position={position}
        open={isOpen}
        onOpenChange={(_, { open }) => setIsOpen(open)}
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => setIsOpen(false)}
              />
            }
          >
            Tìm kiếm
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <p>Các thông tin tìm kiếm</p>
        </DrawerBody>
      </OverlayDrawer>

      <div className={styles.content}>
        <Filter28Regular
          appearance="primary"
          onClick={onClickEndButton}
          style={{ height: '20px', width: "20px", color: 'var(--colorNeutralForeground1)', cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};
