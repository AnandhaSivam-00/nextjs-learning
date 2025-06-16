import modelData from "../data/models.json";

export async function fetchModelData() {
    return modelData;
}

export async function fetchModelById(id: string) {
    return modelData.find((model) => model.id === parseInt(id));
}
