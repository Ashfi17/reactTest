const initialState = {
  workingSteps: {
    step1:
      "The issuer issues and sends the tamper-proofed certificate to the recipient",
    step2:
      "The recipient can view,store and maintain all his certificates at one place",
    step3:
      "The verifier is able check & verify if the certificate is from a legit institution",
    stepSmallText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SOME_TYPE":
      return { ...state, workingSteps: action.payload };
    default:
      return { ...state };
  }
}
