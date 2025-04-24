const mapRoleToWord = (role: number): "GUEST" | "USER" | "ADMINISTRATOR" => {
    return role == 2 ? "ADMINISTRATOR" : role == 1 ? "USER" : "GUEST"
}

export default mapRoleToWord;