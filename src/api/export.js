import axios from './service';
export const exportTemplate = async (exportBody) => {
    const response = await axios.post(
        "/export",
        exportBody,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        },
    );

    return response;
}