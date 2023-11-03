export default function Question11(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        //paddingLeft: 180,
        //paddingRight: "7%",
        //flexDirection: "column",
        marginTop: 20,
        justifyContent: "center",
        alignItems: "flex-end",

        // marginBottom: 20,
        gap: 10,
        display: "inline-flex",
      }}
    >
      <div style={{ width: "100%" }}>
        <input
          style={{
            color: "#0F0E0E",
            fontSize: 16,
            width: "100%",
            fontFamily: "Inter",
            fontWeight: "300",
            marginBottom: 20,
            height: 30,
            lineHeight: 1,
            wordWrap: "break-word",
          }}
          type="text"
          placeholder="First name"
        ></input>
        <input
          style={{
            color: "#0F0E0E",
            fontSize: 16,
            width: "100%",
            fontFamily: "Inter",
            fontWeight: "300",
            marginBottom: 20,
            height: 30,
            lineHeight: 1,
            wordWrap: "break-word",
          }}
          type="text"
          placeholder="Last name"
        ></input>
        <input
          style={{
            color: "#0F0E0E",
            fontSize: 16,
            width: "100%",
            fontFamily: "Inter",
            fontWeight: "300",
            lineHeight: 1,
            height: 30,
            marginBottom: 20,
            wordWrap: "break-word",
          }}
          type="text"
          placeholder="Company"
        ></input>
      </div>
      <div style={{ width: "100%" }}>
        <input
          style={{
            color: "#0F0E0E",
            fontSize: 16,
            width: "100%",
            fontFamily: "Inter",
            fontWeight: "300",
            marginBottom: 20,
            lineHeight: 1,
            height: 30,
            wordWrap: "break-word",
          }}
          type="text"
          placeholder="job title"
        ></input>
        <input
          style={{
            color: "#0F0E0E",
            fontSize: 16,
            width: "100%",
            fontFamily: "Inter",
            fontWeight: "300",
            marginBottom: 20,
            lineHeight: 1,
            height: 30,
            wordWrap: "break-word",
          }}
          type="text"
          placeholder="Phone"
        ></input>
        <select
          style={{
            color: "#0F0E0E",
            fontSize: 16,
            width: "100%",
            fontFamily: "Inter",
            fontWeight: "300",
            lineHeight: 2,
            height: 30,
            marginBottom: 20,
            wordWrap: "break-word",
          }}
          type="text"
          placeholder="Country"
        ></select>
      </div>
    </div>
  );
}
