from smtplib import SMTP
from typing import Optional

from pydantic import BaseModel
from pylon.core.tools import log


class IntegrationModel(BaseModel):
    host: str
    port: int
    user: str
    passwd: str
    sender: Optional[str]

    def check_connection(self) -> bool:
        try:
            smtp = SMTP(self.host, self.port)
            smtp.login(self.user, self.passwd)
            smtp.quit()
            return True
        except Exception as e:
            log.exception(e)
            return False
