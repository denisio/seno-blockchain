import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("SENO_ROOT", "~/.seno/mainnet"))).resolve()
