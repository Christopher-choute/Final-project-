"""empty message

Revision ID: 1035f7a3f42f
Revises: 2fd4e3d8200c
Create Date: 2023-04-07 12:31:34.627998

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1035f7a3f42f'
down_revision = '2fd4e3d8200c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image_url', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.drop_column('image_url')

    # ### end Alembic commands ###
