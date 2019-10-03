export async function DANGEROUSLY_CLEAR_DB(DATABASE) {
  try {
    await DATABASE.destroy({ where: {} })
  } catch (error) {
    throw error
  }
}