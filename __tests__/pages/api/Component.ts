import { sendGetRequest } from "@/pages/api/Component";

describe("sendGetRequest", () => {
    it("should return response data on success", async () => {
        const result = await sendGetRequest();
        console.log(result);
    });
});