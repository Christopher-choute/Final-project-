"""empty message

Revision ID: bb1d6bf0e38d
Revises: c838ac93f222
Create Date: 2023-04-05 13:22:39.305119

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bb1d6bf0e38d'
down_revision = 'c838ac93f222'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('fishes', schema=None) as batch_op:
        batch_op.drop_column('tank_mate_compatibility')

    with op.batch_alter_table('fishtanks', schema=None) as batch_op:
        batch_op.add_column(sa.Column('price', sa.String(), nullable=True))
        batch_op.drop_column('description')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('fishtanks', schema=None) as batch_op:
        batch_op.add_column(sa.Column('description', sa.VARCHAR(), nullable=True))
        batch_op.drop_column('price')

    with op.batch_alter_table('fishes', schema=None) as batch_op:
        batch_op.add_column(sa.Column('tank_mate_compatibility', sa.VARCHAR(), nullable=True))

    # ### end Alembic commands ###