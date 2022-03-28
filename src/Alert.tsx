import * as Toast from "@radix-ui/react-toast";
import { clearAlert } from "./alertSlice";
import { useDispatch, useSelector } from "./hooks";
import { styled } from "./stitches.config";

const StyledToast = styled(Toast.Root, {
  backgroundColor: "$uierrorbackground",
  border: "1px solid $uierrorborder",
  borderRadius: 5,
  padding: 10,
});

const StyledTitle = styled(Toast.Title, {
  fontSize: 20,
  fontWeight: "bold",
  fontFamily: "sans-serif",
  color: "$text",
});

const ViewPort = styled(Toast.Viewport, {
  position: "fixed",
  top: "5rem",
  left: 0,
  padding: 0,
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  listStyle: "none",
  zIndex: 2147483647,
});

export default function Alert() {
  const dispatch = useDispatch();
  const msg = useSelector((state) => state.alert);
  return (
    <Toast.Provider>
      <ViewPort>
        <StyledToast
          open={msg !== null}
          role="alert"
          onOpenChange={(open) => dispatch(clearAlert())}
        >
          <StyledTitle>{msg}</StyledTitle>
        </StyledToast>
      </ViewPort>
    </Toast.Provider>
  );
}
